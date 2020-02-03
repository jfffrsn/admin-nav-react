//@ts-check
import React from 'react';
import { Checkbox, Table } from '@echo360/ui-lib';
// eslint-disable-next-line no-unused-vars
import { Presentation } from './PresentationTable';
import { fetchPresentationTable } from '../../services/services';
import Paginator from '../Paginator';
import { i18nX } from '../../i18n';

const columnDefs = 
  [ {headerText: i18nX.t("PresentationTableHeader.id"), displayField: 'id', sortField: 'paddedID', enableSort: true},
    {headerText: i18nX.t("PresentationTableHeader.thumbnail"), displayField: 'ThumbnailURLElement'},
    {headerText: i18nX.t("PresentationTableHeader.conferenceTitle"), displayField: 'ConferenceTitle', sortField: 'ConferenceTitle', enableSort: true},
    {headerText: i18nX.t("PresentationTableHeader.presentationTitle"), displayField: 'Title', sortField: 'Title', enableSort: true},
    {headerText: i18nX.t("PresentationTableHeader.speakers"), displayField: 'SpeakerList'}
  ]

class PresentationTable extends React.Component {
    
    abortController = new AbortController();

    /** @param {any} props */
    constructor(props) {
        super(props);

        this.state = {
            /** @type {any} */
            sortBy: {}, showHeaders: "checked",
            pageNumber: undefined,
            pageSize: 20,
            data: []       
        };  
    }

    componentDidMount() {
        // fetch(process.env.REACT_APP_APIBASEURL + '/api/Presentation/GetPresentationList')
        // .then(res => res.json())

        fetchPresentationTable(this.abortController.signal)
        //.then(res => res.json())
        /** @param {Presentation[]} presrows */
        .then((presrows) => {
            this.setState({ presentations: presrows,
                            sortBy: { field: "Title", order: "asc"}, 
                            showHeaders: "checked",
            });
        })
        .catch( err => {
            if (err.name === "AbortError") {
                console.log("fetchPresentationTable aborted");
                return;
            }
            console.log(err)

        })
    }

    componentWillUnmount() {
        this.abortController.abort();
    }
    
    handleHeaderChange = value => this.setState({ showHeaders: value });

    handlePageChange = pageNumber => this.setState({ pageNumber })

    handleSortChange = (field, order) => {
        this.setState({sortBy: {field, order}})
    }

    /** 
    * Creates presentation data suitable for table
    * adds image tag to ThumbnailURL
    * add id for row key
    * 
    * @param {Presentation[]} presentations
    * @returns {Presentation[]} 
    * */
    generateRowData(presentations) {
        if (presentations == null) return presentations;
        const sortedPresentations = presentations.sort(PresentationTable.sortPresentations(this.state.sortBy.field, this.state.sortBy.order));
        return this.getCurrentPageContents(sortedPresentations).map( presentation => {
                const numRows = presentation.Speakers.length; 
                return {    ...presentation,
                            ThumbnailURLElement: <img src={presentation.ThumbnailURL} alt={i18nX.t("PresentationTableHeader.thumbnail")} width="100"/>,
                            id: presentation.ID,
                            paddedID: PresentationTable.zeroPad(presentation.ID, 8),
                            SpeakerList: presentation.Speakers.map( (speaker, i) => { return speaker.FullName + ' (' + speaker.RoleText + ')' + ((i < numRows - 1) ? ', ' : '') } )
                       };
        });
    }

    /**
     * 
     * @param {Presentation[]} presentations 
     */
    getCurrentPage(presentations) {
        let currentPage = this.state.pageNumber || 0
        if (presentations) {
            const pageCount = Math.ceil(presentations.length / this.state.pageSize)
            currentPage = currentPage + 1 > pageCount ? pageCount : currentPage
            currentPage = currentPage <= 0 ? undefined : currentPage
        
            if (this.state.pageNumber !== currentPage) this.setState({ pageNumber: currentPage })
        }
        return currentPage || 0
    }
    
    /**
     * 
     * @param {Presentation[]} presentations 
     */
    getCurrentPageContents(presentations) {
        const pageCount = Math.ceil(presentations.length / this.state.pageSize)
        if (pageCount > 1) {
            const currentPage = this.getCurrentPage(presentations)
            return presentations.slice(currentPage * this.state.pageSize, (currentPage + 1) * this.state.pageSize)
        }
        return presentations
    }

    /**
     * Sort callback, consider moving to separate file and generalize if possible
     * @param {string | number} field
     * @param {string} order 
     * @returns { any }
     */
    static sortPresentations(field, order) 
        {
        const isAsc = (order === undefined || order === "asc") ? true : false;
        const sortField = (field === undefined) ? "Title" : field;
        return (a, b) => {
            if (sortField === "paddedID")
            {
                const aNum = Number( a.ID )
                const bNum = Number( b.ID )
                if (aNum > bNum) return isAsc ? 1 : -1
                if (aNum < bNum) return isAsc ? -1 : 1
                return 0
            }

            if (sortField === "Title")
            {
                if (a.Title > b.Title) return isAsc ? 1 : -1
                if (a.Title < b.Title) return isAsc ? -1 : 1
                return 0
            }  
            if (sortField === "ConferenceTitle")
            {
                if (a.ConferenceTitle > b.ConferenceTitle) return isAsc ? 1 : -1
                if (a.ConferenceTitle < b.ConferenceTitle) return isAsc ? -1 : 1
                return 0
            }                        
        }
    }

    /**
     * Utility function to pad number with zeros
     */
     static zeroPad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
      }
      

    render() {
        return this.state.presentations === undefined ? i18nX.t("loadingData") : 
        this.state.presentations.length === 0 ? i18nX.t("noData") : (
        <React.Fragment>
            <Checkbox id="toggle-show-headers" value={this.state.showHeaders} label={i18nX.t("TableHeader.showHeaders")} onChange={this.handleHeaderChange} />
            <br/>
            <Table
                columnDefs={ columnDefs }
                data={ this.generateRowData(this.state.presentations) }
                
                hideHeaders={this.state.showHeaders === "unchecked"}
                sortField={this.state.sortBy.field}
                sortOrder={this.state.sortBy.order}
                onSortChange={this.handleSortChange}
                
                onRowClick={(id) => alert("Clicked " + id)}
            />
            <br/>
            <Paginator
                name="media-collection"
                itemCount={this.state.presentations === undefined ? 0 : this.state.presentations.length}
                pageNumber={this.getCurrentPage(this.state.presentations)}
                onPageChange={this.handlePageChange}
                pageSize={this.state.pageSize}
            />
        </React.Fragment>
        );
    }

};

export default PresentationTable;