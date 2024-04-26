import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            language: "hi",
            search: ""
        }
    }
    changeLanguage = (data) => {
        this.setState({ language: data })
    }
    changeSearch = (data) => {
        this.setState({ search: data })
    }
    render() {
        return (
            <BrowserRouter>
                <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch} />
                <Routes>
                    <Route path='All' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "All"} />} />
                    <Route path='Politics' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "Politics"} />} />
                    <Route path='Science' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "Science"} />} />
                    <Route path='Technology' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "Technology"} />} />
                    <Route path='Education' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "Education"} />} />
                    <Route path='Entertainment' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "Entertainment"} />} />
                    <Route path='Crime' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "Crime"} />} />
                    <Route path='Sports' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "Sports"} />} />
                    <Route path='Cricket' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "Cricket"} />} />
                    <Route path='World' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "World"} />} />
                    <Route path='Covid-19' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "Covid-19"} />} />
                    <Route path='Jokes' element={<Home lannguage={this.state.language} q={this.state.search ? this.state.search : "Jokes"} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        )
    }
}
