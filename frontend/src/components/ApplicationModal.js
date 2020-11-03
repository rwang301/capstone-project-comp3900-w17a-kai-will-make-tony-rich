import React from 'react';
import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';
import { Header, Form } from './Form';
import Input from './Input';
import JobRadios from './JobRadios';
import DatePicker from "react-datepicker";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const ModalContainer = styled.div`
  display: ${props => props.toShow ? 'block' : 'none'};
  cursor: auto;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 2vw;
  background-color: rgba(0,0,0,0.2);
`;

const ModalContent = styled.div`
  background-color: #d4fafa;
  margin: auto;
  padding: 1.5vw;
  border: 1px solid #888;
  border-radius: 2vw;
  width: 50%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled(CloseIcon)`
  position: absolute;
  margin-left: 48vw;
  cursor: pointer;
`;

const DateText = styled.p`
  margin-top: 0vw;
`;

const DateContainer = styled(DatePicker)`
  margin-bottom: 1.5vw;
`;

const Button = styled.button`
  width: 13vmin;
  height: 5vmin;
  font-size: 1.5vmin;
  border-radius: 5px;
  background: whitesmoke;
  color: black;
  border: 3px solid darkcyan;
  margin: 0.75vw;
  margin-top: 2vw;

  &:hover {
    font-weight: bold;
    background: black;
    color: whitesmoke;
    border: 1px solid whitesmoke;
  }
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function ApplicationModal({toShow, setShow, setSkillsToRender}) {
  const classes = useStyles();
  const [skillOne, setSkillOne] = React.useState('');
  const [skillTwo, setSkillTwo] = React.useState('');
  const [skillThree, setSkillThree] = React.useState('');

  const handleSkillOneChange = (event) => {
    setSkillOne(event.target.value);
  };

  const handleSkillTwoChange = (event) => {
    setSkillTwo(event.target.value);
  };

  const handleSkillThreeChange = (event) => {
    setSkillThree(event.target.value);
  };

  const handleSkillSave = () => {
    console.log('your skills:', skillOne, skillTwo, skillThree);
    setSkillsToRender([skillOne, skillTwo, skillThree]);
  };

  return (
    <ModalContainer toShow={toShow}>
      <ModalContent>
        <CloseButton onClick={(e) => {
            e.stopPropagation();
            setShow(false);
        }}/>
        <Header>Apply for Roles</Header>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Skill 1</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={skillOne}
                onChange={handleSkillOneChange}
              >
                <MenuItem value={'Reactjs'}>Reactjs</MenuItem>
                <MenuItem value={'CSS'}>CSS</MenuItem>
                <MenuItem value={'HTML'}>HTML</MenuItem>
                <MenuItem value={'Operating Systems'}>Operating Systems</MenuItem>
                <MenuItem value={'Assembly Language'}>Assembly Language</MenuItem>
                <MenuItem value={'C Programming'}>C Programming</MenuItem>
              </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Skill 2</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={skillTwo}
                onChange={handleSkillTwoChange}
              >
                <MenuItem value={'Reactjs'}>Reactjs</MenuItem>
                <MenuItem value={'CSS'}>CSS</MenuItem>
                <MenuItem value={'HTML'}>HTML</MenuItem>
                <MenuItem value={'Operating Systems'}>Operating Systems</MenuItem>
                <MenuItem value={'Assembly Language'}>Assembly Language</MenuItem>
                <MenuItem value={'C Programming'}>C Programming</MenuItem>
              </Select>
            </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Skill 3</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={skillThree}
                onChange={handleSkillThreeChange}
              >
                <MenuItem value={'Reactjs'}>Reactjs</MenuItem>
                <MenuItem value={'CSS'}>CSS</MenuItem>
                <MenuItem value={'HTML'}>HTML</MenuItem>
                <MenuItem value={'Operating Systems'}>Operating Systems</MenuItem>
                <MenuItem value={'Assembly Language'}>Assembly Language</MenuItem>
                <MenuItem value={'C Programming'}>C Programming</MenuItem>
              </Select>
            </FormControl>
        <Button onClick={handleSkillSave}>Save</Button>
      </ModalContent>
    </ModalContainer>
  )
}