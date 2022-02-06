import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form';


class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'Alex P.', salary: 30000, increase: true, like: false, id: 1},
				{name: 'Julia S.', salary: 25000, increase: false, like: false, id: 2},
				{name: 'Serhio A.', salary: 28000, increase: false, like: false, id: 3}
			],
			term: '',
			filter: 'all'
		}
		this.newId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}


    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
			like: false,
            id: this.newId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if(item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	searchPers = (items, term) => {
		if (term.length === 0) {
			return items
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'like':
				return items.filter(item => item.like);
			case 'moreThen':
				return items.filter(item => item.salary > 1000);
			default:
				return items
		}
	}

	onFilter = (filter) => {
		this.setState({filter});
	}

	render() { 
		const {data, term, filter} = this.state
		const quantity = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.filterPost(this.searchPers(data, term), filter);


		return(
			<div className="app">
				<AppInfo
				quantity={quantity}
				increased={increased}/>
	
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter 
					filter={filter}
					onFilter={this.onFilter}/>
				</div>
	
				<EmploeesList 
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}/>
				<EmploeesAddForm
					data={data}
					onAdd={this.addItem}/>
	
			</div>
		);
	}
}

export default App;