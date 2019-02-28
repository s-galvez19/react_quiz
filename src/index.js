import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import files from './folder.js';
import moment from 'moment';



function randomId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
};

function Icon({type}){
    if(type.type == 'folder'){
        return(
            <i className='fa fa-folder folder-icon'/>
        );
    }else if(type.type == 'file'){
        return(
            <i className='fa fa-file folder-icon'/>
        );
    };
};

function Name({name}){
    return(
        <span className='file-name'>{name.name}</span>
    );
};

function Message({message}){
    return(
        <span className='file-description'>{message.latestCommit.message}</span>
    );
};

function Time({time}){
    const timeString = moment(time.updated_at).fromNow();
    return(
        <span className='time'>{timeString}</span>
    );
};

class FileStructure extends Component{
    render(){
        console.log(files);
        return(
            this.props.files.map(file=>(
                <div className='row' key={randomId()}>
                    <Icon type={file}/>
                    <Name name={file} />
                    <Message message={file}/>
                    <Time time={file} />
                </div>
            ))
        );
    };
};


ReactDOM.render(<FileStructure files={files}/>, document.getElementById('root'));

