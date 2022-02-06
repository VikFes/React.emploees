import { Component } from 'react';

import './emploees-add-form.css';


class EmploeesAddForm extends Component {
	constructor (props) {
		super (props);
		this.state = {
			name: '',
			salary: '',
			id : ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onAdd = (e) => {
        e.preventDefault();
        if(this.state.name.length > 2 && this.state.salary.length > 2){
			this.props.onAdd(this.state.name, this.state.salary);
		}
        this.setState({
            name: '',
            salary: ''
        })
    }

	render () {
		const {name, salary} = this.state
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex">
					<input type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name='name'
						value={name} 
						onChange={this.onValueChange}/>
					<input type="number"
						className="form-control new-post-label"
						placeholder="З/П в гривнах?" 
						name='salary'
						value={salary}
						onChange={this.onValueChange}/>
	
					<button type="submit"
							className="btn btn-outline-light"
							onClick={this.onAdd}
							>Добавить</button>
				</form>
			</div>
		)
	}

}

export default EmploeesAddForm;