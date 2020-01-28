//@ts-check
import React from 'react';
import { Checkbox, Table } from '@echo360/ui-lib';
// eslint-disable-next-line no-unused-vars
import { Presentation } from './PresentationTable';

class PresentationTable extends React.Component{
    
    /** @param {any} props */
    constructor(props) {
        super(props);
        this.state = {
            /** @type {any} */
            sortBy: {}, showHeaders: "checked",
            columnDefs: [
                {headerText: 'id', displayField: 'id', sortField: 'paddedID', enableSort: true},
                {headerText: 'Thumbnail', displayField: 'ThumbnailURLElement'},
                {headerText: 'ConferenceTitle', displayField: 'ConferenceTitle', sortField: 'ConferenceTitle', enableSort: true},
                {headerText: 'Title', displayField: 'Title', sortField: 'Title', enableSort: true},
                {headerText: 'Speakers', displayField: 'SpeakerList'}
                
            ],
            data: []       
        };  
    }

    handleHeaderChange = value => this.setState({ showHeaders: value });

    handleSortChange = (field, order) => {
        this.setState({sortBy: {field, order}})
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_APIBASEURL + '/api/Presentation/GetPresentationList')
        .then(res => res.json())
        /** @param {Presenation[]} presrows */
        .then((presrows) => {
            this.setState({ presentations: presrows,
                            sortBy: { field: "Title", order: "asc"}, 
                            showHeaders: "checked",
            });
        })
        .catch(console.log)
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
        return sortedPresentations.map( presentation => {
                const numRows = presentation.Speakers.length; 
                return {    ...presentation,
                            ThumbnailURLElement: <img src={presentation.ThumbnailURL} alt={"Thumbnail"} />,
                            id: presentation.ID,
                            paddedID: PresentationTable.zeroPad(presentation.ID, 8),
                            SpeakerList: presentation.Speakers.map( (speaker, i) => { return speaker.FullName + ' (' + speaker.RoleText + ')' + ((i < numRows - 1) ? ', ' : '') } )
                       };
        }).slice(0,20) ;  // TODO: calculate pagination
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
        return (
        <React.Fragment>
        <Checkbox id="toggle-show-headers" value={this.state.showHeaders} label="Show headers" onChange={this.handleHeaderChange} />
        <br/>
        <Table
            columnDefs={ this.state.columnDefs }
            data={ this.generateRowData(this.state.presentations) }
            
            hideHeaders={this.state.showHeaders === "unchecked"}
            
            sortField={this.state.sortBy.field}
            sortOrder={this.state.sortBy.order}
            onSortChange={this.handleSortChange}
            
            onRowClick={(id) => alert("Clicked " + id)}
        />
        </React.Fragment>
        );
    }

};

export default PresentationTable;