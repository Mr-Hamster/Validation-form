import React, {Fragment} from 'react'

export default class Form extends React.Component{
    state = {
        inputText:'',
        textareaText:'',
        showData:{
            name:'',
            text:'',
        }
    }

    inputRef = React.createRef();
    textareaRef = React.createRef();
    

    handleChange = () => {
        this.setState({
            inputText: this.inputRef.current.value,
            textareaText: this.textareaRef.current.value,
        })
    }

    handleShow = (e) => {
        e.preventDefault();
        const{inputText,textareaText} = this.state;
        this.setState({
            inputText:'',
            textareaText:'',
            showData: {
                name:inputText,
                text:textareaText,
            }
        })
    }

    render(){
        const {inputText,textareaText, showData} = this.state;    
        const {name, text} = showData;
        console.log(this.state)
        return(
            <Fragment>    
                <form>
                    <label>
                        Name:
                        <input ref={this.inputRef} type='text' name="name" value={inputText} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label htmlFor="text">Text:</label>
                    <textarea ref={this.textareaRef} id='text' value={textareaText} onChange={this.handleChange}/>
                    <button onClick={this.handleShow}>Show</button>
                </form>
                <h2>{name}</h2>
                <br />
                <h3> {text}</h3>
            </Fragment>
        );
    }
}