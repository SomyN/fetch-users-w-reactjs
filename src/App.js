import React from "react";

class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
  }
  
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		return (
		<div className = "App container flex flex-col justify-center items-center gap-5 p-100  ">
			<h1 className="text-5xl font-bold text-center my-4"> All Users </h1> {
				items.map((item) => (
          <div className="text-1xl box-border w-100 flex flex-row gap-20 justify-center text-center items-center" key={item.id}>
            <div className="p-5 rounded-md shadow-2xl">
              		<p className="card-text f-3 border-solid">Username: { item.username }</p> 
					<p className="border-solid">User email: {item.email} </p>
					<p className="border-solid">Official website: {item.website}</p>
              		<p className="border-solid">Phone number: {item.phone} </p>
            </div>
					</div>
				))
			}
		</div>
	);
}
}

export default App;

