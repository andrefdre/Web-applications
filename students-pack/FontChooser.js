
class FontChooser extends React.Component {

	constructor(props) {
		super(props);
		if (this.props.bold == 'true') {
			this.default_bold = this.props.bold;
		}
		else {
			this.default_bold
		}
		this.Size = this.props.size;
		this.text_showing = false;
		this.min=this.props.min
		this.max=this.props.max
	}

	componentDidMount() {
		if (this.props.bold == 'true') {
			textSpan.style.fontWeight = "bold";
		}
		else if (this.props.bold == 'false') {
			textSpan.style.fontWeight = "normal";
		}
		console.log(this.default_bold)

		if(this.props.min<=0){
			this.min=1
		}

		if(parseInt(this.props.size)<parseInt(this.props.min)){
			console.log(this.props.size)
			console.log(this.props.min)
			console.log(this.props.size<this.props.min)
			this.Size=this.min
			textSpan.style.fontSize = this.Size + "px"
			fontSizeSpan.innerText = this.Size;
			textSpan.style.color = "red"
		}

		if(this.props.size>this.props.max){
			this.Size=this.max
			textSpan.style.fontSize = this.Size + "px"
			fontSizeSpan.innerText = this.Size;
			textSpan.style.color = "red"
		}

		if(this.props.min>this.props.max){
			this.max=this.min
			this.Size=this.props.min
			textSpan.style.fontSize = this.Size + "px"
			fontSizeSpan.innerText = this.Size;
			textSpan.style.color = "red"
		}
	};

	toggleChange = () => {
		console.log(boldCheckbox.checked)
		if (boldCheckbox.checked) {
			textSpan.style.fontWeight = "bold"
		}
		else {
			textSpan.style.fontWeight = "normal"
		}
	};

	Decrease = () => {
		if (this.Size > parseInt(this.min, 10)) {
			this.Size--
			textSpan.style.fontSize = this.Size + "px"
			fontSizeSpan.innerText = this.Size;
			console.log(textSpan.style.fontSize)
			this.Limits_Color()
		}
	}

	Increase = () => {
		if (this.Size < parseInt(this.max, 10)) {
			this.Size++
			textSpan.style.fontSize = this.Size + "px"
			fontSizeSpan.innerText = this.Size;
			console.log(textSpan.style.fontSize)
			this.Limits_Color()
		}
	}

	Limits_Color = () => {
		if (this.Size == parseInt(this.min, 10) || this.Size == parseInt(this.max, 10)) {
			console.log("On the limits")
			textSpan.style.color = "red"
		}
		else {
			textSpan.style.color = "black"
		}
	}

	Show_items = (e) => {
		var click =e.detail;
		const timer = setTimeout(() => {

			if (click === 1) {
				console.log("click");
				if (this.text_showing == false) {
					boldCheckbox.hidden = false;
					decreaseButton.hidden = false;
					fontSizeSpan.hidden = false;
					increaseButton.hidden = false;
					this.text_showing = true
				}

				else {
					boldCheckbox.hidden = true;
					decreaseButton.hidden = true;
					fontSizeSpan.hidden = true;
					increaseButton.hidden = true;
					this.text_showing = false
					click=0
					e.detail=0
				}

			}
		}, 250);

		if (click === 2) {
			console.log("double click");
			clearTimeout(timer);
			this.Size = this.props.size;
			textSpan.style.fontSize = this.Size + "px"
			fontSizeSpan.innerText = this.Size;
			textSpan.style.color = "black"
			click=0
			e.detail=0
		}
	};


	render() {
		function declare() {
			//Do i need to do this or just use the id directly?
			let boldCheckbox = document.getElementById("boldCheckbox");
			let decreaseButton = document.getElementById("decreaseButton");
			let fontSizeSpan = document.getElementById("fontSizeSpan");
			let increaseButton = document.getElementById("increaseButton");
			let textSpan = document.getElementById("textSpan");
		};




		return (
			<div>
				{declare()

				}
				<input onChange={this.toggleChange} defaultChecked={this.default_bold} type="checkbox" id="boldCheckbox" hidden={true} />
				<button id="decreaseButton" onClick={this.Decrease} hidden={true}>-</button>
				<span id="fontSizeSpan" hidden={true}>{this.Size}</span>
				<button id="increaseButton" onClick={this.Increase} hidden={true}>+</button>
				<span onClick={this.Show_items} id="textSpan">{this.props.text}</span>
			</div>
		);
	}
}

