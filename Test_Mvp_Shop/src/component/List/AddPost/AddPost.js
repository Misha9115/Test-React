import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addData } from './../../../store/action/actionProduct'
import Post from './Post';
import Block from './Block';
class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            desc: '',
            cost: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { name, desc, cost } = this.state;
        localStorage.setItem('name', name);
        localStorage.setItem('desc', desc);
        localStorage.setItem('cost', cost);
        this.creatProduct()
    };

    creatProduct = () => {

        this.setState({
            name: localStorage.getItem('name'),
            desc: localStorage.getItem('desc'),
            cost: localStorage.getItem('cost'),
        });
        if (this.name !== '' && this.desc !== '' && this.cost !== '') {
            this.props.addData(
                localStorage.getItem('name'),
                localStorage.getItem('desc'),
                localStorage.getItem('cost'),
                this.props.product.length + 1
            )
        }
    }
    render() {

        return (<div>
            {this.props.status ?
                <Post
                    name={this.state.name}
                    desc={this.state.desc}
                    cost={this.state.cost}
                    chenge={this.handleChange}
                    handelFS={this.handleFormSubmit}
                /> :
                <Block />
            }

        </div>
        );
    }


}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addData: addData }, dispatch)
}

function mapStateToProps(state) {
    return {
        product: state.active.posts,
        status: state.active.statusADMIN
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(AddPost);