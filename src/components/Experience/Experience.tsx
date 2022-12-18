import React from 'react'
import style from './Experience.module.css'
import linkIcon from '../../img/link.svg'
import neonLogo from '../../img/neon.png'
import traqLogo from '../../img/traq.png'
import klima from '../../img/klima.png'
import punk from '../../img/punk.png'
import clock from '../../img/clock.svg'
import onset from '../../img/onset.svg'
import westernCape from '../../img/westernCape.jpeg'
import walletUsage from '../../img/walletUsage.svg'

type Props = {}

const Experience = (props: Props) => {
  const projects = [
    {
      title: 'Cell Traq',
      description:
        'System monitoring cathode efficiency in electrowinning plants.',
      date: '[2018-2019]',
      link: 'https://masq.co.za/cell-traq/',
      color: '#8B90FE',
      logo: traqLogo,
    },
    {
      title: 'Neon Analytics',
      description: 'LinkedIn marketing analytics and reporting',
      date: '[2020-2022]',
      link: 'https://analytics.neonsolutions.co.za',
      color: '#BE8BFE',
      logo: neonLogo,
    },
    {
      title: 'Klima Incoom',
      description: 'Simple staking rewards calculator for KlimaDAO',
      date: '[2021]',
      link: 'https://klimaincoom.luko.co.za/',
      color: '#E08BFE',
      logo: klima,
    },
    {
      title: 'Synthetic Punks',
      description:
        'A unique, fully on-chain CryptoPunk for every Ethereum address',
      date: '[2022]',
      link: 'https://syntheticpunks.com/',
      color: '#FE8BDE',
      logo: punk,
    },
    {
      title: 'Moment NFT',
      description: 'A fully on-chain clock NFT',
      date: '[2022]',
      link: 'https://momentNFT.luko.co.za/',
      color: '#FE8B92',
      logo: clock,
    },
        {
      title: 'Substance Use Disorder Assessment Tool',
      description:
        'Standardised tool for assessing substance use disorders in the Western Cape (South Africa)',
      date: '[2022]',
      color: '#FEAD8B',
      logo: westernCape,
    },
        {
      title: 'Wallet Usage',
      description:
        'Simple tool showing wallet activity, made to test development using ChatGPT',
      date: '[2022]',
      link: 'https://walletusage.luko.co.za/',
      color: '#fedc8b',
      logo: walletUsage,
    },
    {
      title: 'Onset Carbon',
      description: 'Easy, publicly verifiable carbon offsetting',
      date: '[2022]',
      link: 'https://www.onsetcarbon.com/',
      color: '#f3fe8b',
      logo: onset,
    },
  ]

  return (
    <div>
      <h1>Experience</h1>
      {projects.map((project, index) => (
        <div
          id="out"
          className="rowContainer moveUp"
          style={{ paddingTop: index > 0 ? '12px' : '5px', width: '100%' }}
        >
          <div>
            <div
              className="point"
              id="point"
              style={{ backgroundColor: project.color }}
            ></div>
          </div>
          <div>
            <div className="rowContainer">
              <img src={project.logo} className={style.logo}></img>
              <h2>{project.title}</h2>
            </div>
            <h3 className={style.infoText}>{project.description}</h3>
            <h3 className={style.date}>{project.date}</h3>
          </div>
          <div style={{ float: 'right', marginLeft: 'auto', marginRight: '0' }}>
            {project.link ? (
              <>
                <a target="_blank" href={project.link}>
                  <img src={linkIcon} className={style.icon}></img>
                </a>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience
