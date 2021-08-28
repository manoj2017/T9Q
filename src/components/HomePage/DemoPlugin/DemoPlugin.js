import React, { Component } from 'react'
import styled from 'styled-components'
import { colorPrimary, fontSecondary, colorWhite, fontPrimary } from './../../../UI/variables'
import media from './../../../UI/media'
import ReactModal from 'react-modal'
import { Close } from 'styled-icons/material/Close'

/* global fetch alert */

const Div = styled.div`
  position: fixed;
  right: -68px;
  top: 50%;
  transform: rotate(-90deg);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
  transition:  all 0.2s ease-out;
  z-index: 1000;
  &:hover {
    transform: rotate(-90deg) translateY(-10px);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
  }
`

const CloseButton = styled(Close)`
  position: absolute;
  right: 15px;
  height: 20px;
  margin-top: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
`

const SkyLight = styled(ReactModal)`
  background: #fff;
  position: absolute;
  z-index: 10000;
  width: 720px;
  margin-top: 150px;
  margin-left: calc(50% - 360px);
  padding: 15px 30px;
  border-radius: 3px;
  > p {
    font-family: ${fontPrimary};
    text-align: center;
    font-weight: 600;
  }
  ${media.phone`
    width: 90%;
    margin-left: 5%;
    padding: 15px 15px;
    margin-top: 100px;
  `}
`
const Button = styled.button`
  border: none;
  background: ${colorPrimary};
  font-family: ${fontSecondary};
  padding: 10px 20px 25px 20px;
  cursor: pointer;
`
const Grid = styled.div`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  > form {
    display: contents;
  }
  ${media.phone`
    grid-gap: 10px;
    grid-template-columns: 40vw 40vw;
    /* grid-template-columns:repeat(2, 150px); */
    /* grid-template-rows: 8; */
  `}
`

const Tag = styled.span`
  text-align: center;
  font-family: ${fontSecondary};
  border: solid 2px ${colorPrimary};
  color: ${({ selected }) => selected ? colorWhite : colorPrimary};
  background: ${({ selected }) => selected ? colorPrimary : colorWhite};
  padding: 10px 0px; 
  border-radius: 50px;
  cursor: pointer;
  ${media.phone`
    grid-column: ${({ i }) => (i % 2 === 0) ? '1/2' : '2/3'};
  `}
`

class TagIndividual extends Component {
  constructor (props) {
    super(props)
    this.state = {
      service: this.props.service,
      selected: this.props.selected
    }
  }

  toggleSelection = () => {
    this.setState(({ selected }) => ({
      selected: !selected
    }))
  }

  render () {
    return (
      <Tag
        onClick={() => { this.toggleSelection(); this.props.toggle(this.state.service) }}
        selected={this.state.selected}
        i={this.props.i}
      >
        {this.state.service}
      </Tag>
    )
  }
}

const Input = styled.input`
  border: solid 2px #eee;
  border-radius: 50px;
  padding: 10px 10px;  
  font-family: ${fontSecondary};
  line-height: 1.2;
  box-sizing: border-box;
  ${media.phone`
    grid-column: ${({ span }) => span}
  `}
`

const Textarea = styled.textarea`
  grid-column: span 3;
  grid-row: span 2;
  border: solid 2px #eee;
  border-radius: 50px;
  padding: 10px 20px;
  line-height: 1.2;
  font-family: ${fontSecondary};
`

const Btn = styled.button`
  background: ${colorPrimary};
  font-family: ${fontSecondary};
  color: white;
  border: none;
  border-radius: 50px;
  padding: 15px 20px;
  cursor: pointer;
  grid-column: 2/3;
  &:disabled {
    opacity: 0.5;
  }
  ${media.phone`
    grid-column: ${({ span }) => span}
  `}
`

const style = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
}
export default class DemoPlugin extends Component {
  state = {
    modal: false,
    isSubmitting: false,
    name: '',
    email: '',
    phoneNo: '',
    message: '',
    selectedServices: [],
    services: [
      {
        service: 'Web App /Dashboards',
        selected: false
      },
      {
        service: 'Web Development',
        selected: false
      },
      {
        service: 'Android App',
        selected: false
      },
      {
        service: 'E-commerce',
        selected: false
      },
      {
        service: 'Hybrid App',
        selected: false
      },
      {
        service: 'Graphic Design',
        selected: false
      }
    ]
  }

  toggleModal = () => {
    this.setState(({ modal }) => ({ modal: !modal }))
  }

  toggleSelected = (service) => {
    this.setState(({ selectedServices }) => {
      if (selectedServices.includes(service)) {
        return { selectedServices: selectedServices.filter(ser => ser !== service) }
      }
      return { selectedServices: [...selectedServices, service] }
    })
  }

  changeHandler = (e, field) => {
    e.persist()
    this.setState(() => ({ [field]: e.target.value }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState(() => ({ setSubmitting: true }))
    fetch('/.netlify/functions/request-demo/request-demo.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(() => {
      console.log(this.state)
      alert('Request is sent! We will get back to you.')
      this.setState(() => ({ setSubmitting: false, modal: false }))
    }).catch(() => alert('Something went wrong! Please try again.'))
  }

  render () {
    return (
          <>
            <Div>
              <Button onClick={this.toggleModal}>
              Request a Demo
              </Button>
            </Div>
            <SkyLight style={style} hideOnOverlayClicked isOpen={this.state.modal} onRequestClose={this.toggleModal} title="Let's Work">
              <CloseButton alt='Close Button' onClick={this.toggleModal} />
              <p>Please Tell Us Your Requirements</p>
              <Grid>
                {this.state.services.map((service, i) => <TagIndividual key={service.service} toggle={this.toggleSelected} {...service} i={i} />)}
                <form onSubmit={this.onSubmit}>
                  <Input span='1/3' type='text' value={this.state.name} placeholder='Name' onChange={(e) => this.changeHandler(e, 'name')} required />
                  <Input span='1/2' type='email' value={this.state.email} placeholder='E-mail' onChange={(e) => this.changeHandler(e, 'email')} required />
                  <Input span='2/3' type='phone' value={this.state.phoneNo} placeholder='Phone Number' onChange={(e) => this.changeHandler(e, 'phoneNo')} required />
                  <Textarea span='1/3' placeholder='Enter you Message' value={this.state.message} onChange={(e) => this.changeHandler(e, 'message')}required />
                  <Btn span='1/3' disabled={this.state.setSubmitting ? 1 : 0} type='submit'>{this.state.setSubmitting ? 'Sending The Quote' : 'Request Quote'}</Btn>
                </form>
              </Grid>
            </SkyLight>
          </>
    )
  }
}
