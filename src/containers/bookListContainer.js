import React, {Component} from 'react'
import {initBookList, addNewBook} from '../actions/actions'
import {connect} from 'react-redux'
import {Table} from 'reactstrap'



const mapStateToProps = (state) => ({
    books: state.bookListReducer.books
})

const mapDispatchToProps = (dispatch) => {
    return{
        initBookList: (payload) => {
            dispatch(initBookList(payload))
        },
        addNewBook: (payload) => {
            dispatch(addNewBook(payload))
        }
    }
}

class BookListContainer extends Component{
    componentDidMount(){
        this.props.addNewBook({title: "xxx"})
    }
    render(){
        let booksDisplay = (<div>Hello</div>);
        if(this.props.books)
            booksDisplay = this.props.books.map((book) => {return (<tr> <td>{book.title}</td><td>{book.author}</td> </tr>)})
        return (
            <div>
                <h1>Books List</h1>
                <Table>
                    <thead>
                        <th>Title</th>
                        <th>Author</th>
                    </thead>
                    <tbody>
                        {booksDisplay}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);