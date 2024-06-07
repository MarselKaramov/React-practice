import React, { Component } from 'react'
import Carusel from 'react-bootstrap/Carousel'
import seaImg from '../assets/sea.jpg'
import mountsImg from '../assets/mounts.jpg'

export default class CaruselBox extends Component {
  render() {
    return (
        <Carusel>
            <Carusel.Item>
                <img 
                    className='d-block'
                    src={seaImg}
                    alt='sea'
                />
                <Carusel.Caption>
                    <h3>Sea image</h3>
                    <p>Lorem ipsum dolor</p>
                </Carusel.Caption>
            </Carusel.Item>
            <Carusel.Item>
                <img 
                    className='d-block'
                    src={mountsImg}
                    alt='mauntaines'
                />
                <Carusel.Caption>
                    <h3>Mount image</h3>
                    <p>Lorem ipsum dolor</p>
                </Carusel.Caption>
            </Carusel.Item>
        </Carusel>
    )
  }
}
