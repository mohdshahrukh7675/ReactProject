import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0
    }
  }
  async getAPIData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&sortBy=publishedAt&labguage=${this.props.language}&apiKey=0865ef8b7b26427d9a55a8bc9aa7bdb3`)
    response = await response.json()
    this.setState({
      articles: response.articles.filter((x)=>x.title!=="Remove"),
      totalResults: response.totalResults
    })
  }
  componentDidMount() {
    this.getAPIData()
  }

  componentDidUpdate(oldProps) {
    if (this.props !== oldProps) {
      this.getAPIData()
    }
  }
  render() {
    return (
      <div className='container-fluid'>
        <h5 className='bg-secondary text-light text-center p-2 my-2'><span className='text-captalize'>{this.props.q}</span> News Article</h5>
        <div className='row'>
          {
            this.state.articles.map((item, index) => {
              return <NewsItem
                key={index}
                title={item.title}
                source={item.source.name}
                pic={item.urlToImage}
                date={item.publishedAt}
                description={item.description}
                url={item.url}
              />
            })
          }
        </div>
      </div>
    )
  }
}
