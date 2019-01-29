import React, { Component } from 'react'
import { images } from '../../assets' 

export default class About extends Component {
  renderItem = (src, desc) => (
    <div style={styles.itemContainer}>
      <img src={src} style={styles.itemImage} />
      <p style={styles.desc}>{desc}</p>
    </div>
  )

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>About</h1>
        <div style={styles.contentsContainer}>
          {this.renderItem(images.kiss, 'KISS (Keep it short and simple), My favorite quote. I always keep it mind when I code.')}
          {this.renderItem(images.fast, 'Love everything fast. Fast performance, fast coding, fast lerner and the apps I made is fast!')}
          {this.renderItem(images.design, 'Always keep in mind for the great UI/UX. Following design principle.')}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f2f2f2',
    padding: 60,
  },
  contentsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 20px',
  },
  itemImage: {
    width: 60,
    height: 60,
    margin: '0 0 16px',
  },
  title: {
    fontSize: '2em',
    color: '#63636e',
    margin: '0 0 30px',
  },
  desc: {
    fontSize: '1em',
    color: '#63636e',
  }
}