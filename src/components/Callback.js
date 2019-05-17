import React, {Component} from 'react';
import Auth from '../Auth';
import { ClipLoader } from 'react-spinners';

export default class Callback extends Component {
    
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }
    
    render(){
        return (
        <div style={{marginTop: 200}}>
            <ClipLoader
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
            />
        </div>
        )
    }
}