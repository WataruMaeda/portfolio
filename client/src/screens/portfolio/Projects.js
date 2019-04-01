import React, { Component } from 'react'
import Radium from 'radium'
import { images } from '../../assets'
import Button from '../../components/Button'
import { apps } from '../../localization/pf'

const ALL = 'All'
const IOS = 'iOS'
const ANDROID = 'Android'
const HYBRID = 'Hybrid'
const WEB = 'Web'

class Projects extends Component {
  state = {
    selected: ALL,
  }

  renderApp = app => {
    const { lang } = this.props
    return (
      <div style={styles.appContainer}>
        <div style={styles.appContentsContainer}>
          <img src={app.logo} style={styles.appImage}/>
          <div style={styles.appTitleContainer}>
            <h1 style={styles.appTitle}>{app.title[lang]}</h1>
            <p style={styles.appSubtitle}>{app.subtitle[lang]}</p>
          </div>
          <button className="btn btn-light" style={styles.moreButton}>More</button>
        </div>
        <div style={styles.ssContainer}>
          {app.ss[lang].map(imgUrl => (
            <img
              src={imgUrl}
              style={styles.ssImage}
              alt="ScreenShots"
            />
          ))}
        </div>
      </div>
    )
  }

  renderButtons = () => {
    const { selected } = this.state
    const { button, buttonSelected } = styles
    const items = [ALL, IOS, ANDROID, HYBRID, WEB]
    return (
      <div style={styles.buttonContainer}>
        {items.map(item => (
          <Button
            title={item}
            className="btn-light"
            style={selected === item ? buttonSelected : button}
            onClick={() => this.setState({ selected: item })}
          />
        ))}
      </div>
    )
  }

  renderPlatform = item => {
    return (
      <div className="shadow-lg p-3 mb-5 bg-white rounded" style={styles.itemContainer}>
        <h1 style={styles.subtitle}>{item.title}</h1>
        {item.apps.map(app => this.renderApp(app))}
      </div>
    )
  }

  render() {
    const { id } = this.props
    const { selected } = this.state
    return (
      <div style={styles.container} id={id}>
        <h1 style={styles.title}>Publishing Apps</h1>
        {this.renderButtons()}
        {(selected === ALL || selected === IOS) && this.renderPlatform(data.ios)}
        {(selected === ALL || selected === ANDROID) && this.renderPlatform(data.android)}
        {(selected === ALL || selected === WEB) && this.renderPlatform(data.web)}
        {(selected === ALL || selected === HYBRID) && this.renderPlatform(data.hybrid)}
      </div>
    )
  }
}

const data = {
  ios: {
    title: 'iOS',
    apps: [
      {
        logo: images.flashcard.icon,
        title: apps.flashCardTitle,
        subtitle: apps.flashCardDesc,
        ss: images.flashcard.ss
      },
      {
        logo: images.stickyMemo.icon,
        title: apps.stickyMemoTitle,
        subtitle: apps.stickyMemoDesc,
        ss: images.stickyMemo.ss
      },
    ]
  },
  android: {
    title: 'Android',
    apps: [
      {
        logo: images.greattaractive.icon,
        title: apps.greattaractiveTitle,
        subtitle: apps.greattaractiveDesc,
        ss: images.greattaractive.ss
      },
    ]
  },
  web: {
    title: 'Web',
    apps: [
      {
        logo: images.iosClassForBeginners.icon,
        title: apps.iosClassTitle,
        subtitle: apps.iosClassDesc,
        ss: images.iosClassForBeginners.ss
      },
    ]
  },
  hybrid: {
    title: 'Hybrid App',
    apps: [
      {
        logo: images.comingSoon.icon,
        title: apps.tourismTitle,
        subtitle: apps.tourismDesc,
        ss: images.comingSoon.ss
      },
    ]
  },
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    padding: 60,
    '@media (max-width: 736px)': {
      padding: '60px 15px',
    }
  },
  contentsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1,
    borderRadius: 20,
    padding: 30,
    margin: '20px 20px 0',
    width: '100%',
  },
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  appContentsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ssContainer: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },
  appTitleContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonContainer: {
    // width: '100%',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: '0 60px',
  },
  title: {
    fontSize: '2em',
    color: '#63636e',
    margin: '0 0 30px',
  },
  subtitle: {
    fontSize: '1.5em',
  },
  appTitle: {
    fontSize: '1em',
  },
  appSubtitle: {
    fontSize: '0.8em',
    color: '#63636e',
  },
  moreButton: {
    margin: 15,
  },
  appImage: {
    verticalAlign: 'middle',
    objectFit: 'cover',
    borderRadius: 10,
    margin: 10,
    width: 60,
    height: 60,
  },
  ssImage: {
    verticalAlign: 'middle',
    objectFit: 'cover',
    borderRadius: 10,
    margin: 10,
    display: 'inline-block',
    maxWidth: '30%',
    width: 'auto',
    height: 'auto',
    '@media (max-width: 736px)': {
      maxWidth: '40%',
    }
  },
  button: {
    background: '#f8f9fa',
    color: '#63636e',
    fontSize: 18,
    padding: '8px 16px',
    margin: '0 4px',
  },
  buttonSelected: {
    background: 'black',
    color: 'white',
    fontSize: 18,
    padding: '8px 16px',
    margin: '0 2px',
  },
}

export default Radium(Projects)