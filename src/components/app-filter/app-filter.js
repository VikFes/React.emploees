import './app-filter.css'




const AppFilter = (props) => {
	const btnsData = [
		{name: 'all', label: 'Все сотрудники'},
		{name: 'like', label: 'С премией'},
		{name: 'moreThen', label: 'ЗП больше 25000'}
	]

	const btns = btnsData.map(({name, label}) => {
		const active = props.filter === name;
		const clazz = active ? 'btn-light' : 'btn-outline-light';

		return (
			<button 
				className={`btn ${clazz}`}
				key={name}
				type="button"
				onClick={() => props.onFilter(name)}>
				{label}
			</button>
		)
	})
	return (
		<div className="btn-group">
			{btns}
		</div>
	)
}

export default AppFilter;