import React from 'react';

class Todos extends React.Component {
    state = {
        input: '',
        list: [],
        edit: false,
        editInput:''
    }


    onChange = (e) => {
        this.setState({ input: e.target.value })
    }

    onClick = () => {
        const add = this.state.list
        add.push(this.state.input)
        // console.log(this.state.list);
        this.setState({ list: add, input: '' });
    }


    onDelete = (e) => {
        console.log(e)
        console.log(e.currentTarget)
        console.log(e.currentTarget.name)
        const Delete = this.state.list
        Delete.splice(e.currentTarget.name, 1)

        // let arr = [];

        // for (let i = Delete.length - 1; i >= 0; i--) {
        //     if (i === e.currentTarget.name) {
        //         return
        //     } else {
        //         arr.push(Delete[i])
        //     }
        // }

        this.setState({ list: Delete });
    }
    // when modify state , we must use setSate();

    // Edit Button active, inactive
    onEdit = () => {
        const Edit = this.state.edit
        this.setState({edit:!Edit})

        // const Edit = this.state.edit
        // if(Edit === true){
        //     this.setState({ edit: false });
        // }else{
        //     this.setState({ edit: true });
        // }
    }


    // Submit button visible or invisible
    onEditInput = (e) => {
        this.setState({ editInput: e.target.value })
    }


    onSubmit = (e) =>{
         console.log(e.currentTarget.name)

         const Submit = e.currentTarget.name
         if(this.state.editInput.length === 0) return
         const newList = this.state.list;
         newList[Submit]= this.state.editInput;
         this.setState({list : newList, editInput: '', edit: false})


    }

    render() {
        console.log(this.state.editInput)
        console.log(this.state.edit)
        return (
            <div>
                <input value={this.state.input} type="text" onChange={this.onChange} />
                <button onClick={this.onClick}>ADD</button>
                <ul>{this.state.list.map((item, index) =>
                    <div style={{ display: "flex" }}>
                        <li key={index} style={{ display: "inline-block" }}>
                            {
                                this.state.edit === true ? <input type="text"  defaultValue={item}  onChange={this.onEditInput}/> : item
                            }
                        </li>
                        <button name={index} onClick={this.onDelete}>Delete</button>
                      
                        {this.state.edit === false? <div></div> : <button name={index}  onClick={this.onSubmit}>Sbumit</button>}
                        {this.state.edit === true ? <div></div> : <button name={index} onClick={this.onEdit}>Edit</button>}
                    </div>)}</ul>


            </div>
            // Basically, we adapt "key={index}" into "tags" in which we want to execute or return result of something when we use "map()" together.
            // 
        );
    }
};

export default Todos;