import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import axios from "axios";
import "react-table/react-table.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <ReactTable
                    data={window.tableData.data}
                    columns={window.tableData.headers}
                    defaultPageSize={window.tableData.data.length}
                    showPaginationBottom={false}
                    sortable={false}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));

var Dropdown = React.createClass({

    propTypes: {
        id: React.PropTypes.string.isRequired,
        options: React.PropTypes.array.isRequired,
        value: React.PropTypes.oneOfType(
            [
                React.PropTypes.number,
                React.PropTypes.string
            ]
        ),
        valueField: React.PropTypes.string,
        labelField: React.PropTypes.string,
        onChange: React.PropTypes.func
    },

    getDefaultProps: function() {
        return {
            value: null,
            valueField: 'value',
            labelField: 'label',
            onChange: null
        };
    },

    getInitialState: function() {
        var selected = this.getSelectedFromProps(this.props);
        return {
            selected: selected
        }
    },

    componentWillReceiveProps: function(nextProps) {
        var selected = this.getSelectedFromProps(nextProps);
        this.setState({
            selected: selected
        });
    },

    getSelectedFromProps(props) {
        var selected;
        if (props.value === null && props.options.length !== 0) {
            selected = props.options[0][props.valueField];
        } else {
            selected = props.value;
        }
        return selected;
    },

    render: function() {
        var self = this;
        var options = self.props.options.map(function(option) {
            return (
                <option key={option[self.props.valueField]} value={option[self.props.valueField]}>
                    {option[self.props.labelField]}
                </option>
            )
        });
        return (
            <select id={this.props.id}
                    className='form-control'
                    value={this.state.selected}
                    onChange={this.handleChange}>
                {options}
            </select>
        )
    },

    handleChange: function(e) {
        if (this.props.onChange) {
            var change = {
                newValue: e.target.value,
                selectID: this.props.id
            }
            this.props.onChange(change);
        }
        this.setState({selected: e.target.value});
    }

});

var options = [
    {
        order: 'ASC',
        value: 1
    },
    {
        order: 'DESC',
        value: -1
    }
];


var dropDownOnChange = function(change) {
        let getUrl;

        if(change.selectID == 'sort-cols-dd'){
            let e = document.getElementById("sort-order-dd");
            let sortOrder = e.options[e.selectedIndex].value;
            getUrl = '/'+change.newValue+'/'+sortOrder;
        }else{
            let e = document.getElementById("sort-cols-dd");
            let sortCol = e.options[e.selectedIndex].value;
            getUrl = '/'+sortCol+'/'+change.newValue;
        }

        axios({
            method: 'get',
            url:getUrl,
            responseType:'json',
            config: {
                onUploadProgress: progressEvent => {
                    let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                    // do whatever you like with the percentage complete
                    // maybe dispatch an action that will update a progress bar or something
                }
            }
        })
            .then(function(response){
                window.tableData = response.data;
                render(<App />, document.getElementById("app"));
            });
};

render(<Dropdown id='sort-cols-dd'
                 options={window.tableData.headers}
                 value='LName'
                 labelField='Header'
                 valueField='accessor'
                 onChange={dropDownOnChange}   />,
    document.getElementById('sort-cols'));

render(<Dropdown id='sort-order-dd'
                 options={options}
                 value={-1}
                 labelField='order'
                 valueField='value'
                 onChange={dropDownOnChange}/>,
    document.getElementById('sort-order'));