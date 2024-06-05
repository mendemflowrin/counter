import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'

import {
  BgContainer,
  LeftPanel,
  InfoCardContainer,
  Info,
  UserInputsList,
  RightPanel,
  CounterHeading,
  AddInputContainer,
  Input,
  AddInputButton,
  EmptyImage,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    UserInputsList: [],
    UserInput: '',
  }
  onChangeUserInput = event => {
    this.setState({UserInput: event.target.value})
  }
  onAddUserInput = event => {
    event.preventDefault()
    const {UserInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: UserInput,
      textLength: UserInput.length,
    }
    this.setState(preveState => ({
      UserInputsList: [...preveState.UserInputsList, newUserInput],
      UserInput: '',
    }))
  }
  renderUserInputs = () => {
    const {UserInputsList} = this.state
    return UserInputsList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      UserInputsList.map(eachItem => (
        <UserInput key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }
  render() {
    const {UserInput} = this.state
    return (
      <BgContainer>
        <LeftPanel>
          <InfoCardContainer>
            <Info>
              Count the characters like a <br /> Boss...
            </Info>
          </InfoCardContainer>
          <UserInputsList>{this.renderUserInputs()}</UserInputsList>
        </LeftPanel>
        <RightPanel>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the characters here"
            />
            <AddInputButton>Add</AddInputButton>
          </AddInputContainer>
        </RightPanel>
      </BgContainer>
    )
  }
}

export default CharacterCounter
