import {Component} from "react";
import './table.css'
import Users from './users/users'

const inputValue = document.getElementsByClassName('inputStyle')


class Table extends Component {
    state = {
        users: Users,
        inputValue: inputValue
    }
    handleDeleteUser = (id) => {
        this.setState({users: this.state.users.filter((user) => user.Id !== id)})
    }
    handleUpdateUser = (oldUser) => {
        const [Id, FullName, Skill, Email] = [prompt('Pls write Id', oldUser.Id), prompt('Pls write FullNam', oldUser.FullName), prompt('Pls write Skill', oldUser.Skill), prompt('Pls write Email', oldUser.Email)]
        this.setState({
            users: this.state.users.map((user) => user.Id === oldUser.Id ? {Id, FullName, Skill, Email} : user)
        })
    }
    handleResetInput = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = ""))
    }
    handleAddUser = () => {
        if (inputValue[1].value === '' || inputValue[0].value === '' || inputValue[2].value === '' || inputValue[3].value === '') {
            return alert('pls fill all input')
        }
        const [Id, FullName, Skill, Email] = [inputValue[0].value, inputValue[1].value, inputValue[2].value, inputValue[3].value]
        this.handleResetInput()
        this.setState({users: [...this.state.users, {Id, FullName, Skill, Email}]})
    }

    render() {
        return (
            <table className={'table'}>
                <thead className={'thead'}>
                <tr>
                    <td>Id</td>
                    <td>FullName</td>
                    <td>Skill</td>
                    <td>Email</td>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map((user) => (
                    <tr key={user.Id}>
                        <td>{user.Id}</td>
                        <td>{user.FullName}</td>
                        <td>{user.Skill}</td>
                        <td>{user.Email}</td>
                        <button className={'Button'} onClick={() => this.handleUpdateUser(user)}>{'update'}</button>
                        <button className={'Button'}
                                onClick={() => this.handleDeleteUser(user.Id)}>{'delete'}</button>
                    </tr>
                ))}
                </tbody>
                <input className={'inputStyle'} type={'text'} placeholder={'Id ...'}/>
                <input className={'inputStyle'} type={'text'} placeholder={'FullName ...'}/>
                <input className={'inputStyle'} type={'text'} placeholder={'Skill ...'}/>
                <input className={'inputStyle'} type={'text'} placeholder={'Email ...'}/>
                <button className={'Button'} onClick={() => this.handleAddUser()}>{'Add a New Student'}</button>
                <button className={'Button'} onClick={() => this.handleResetInput()}>{'Reset'}</button>
            </table>
        )
    }
}

export default Table