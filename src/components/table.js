import {Component} from "react";
import './table.css'

const inputValue = document.getElementsByClassName('inputStyle')
const users = [
    {Id: 1, FullName: 'Soheil Saedi', Skill: 'Developer', Email: 'saedi852@gmail.com'},
    {Id: 2, FullName: 'Reza Saedi', Skill: 'Developer', Email: 'saedi853@gmail.com'},
    {Id: 3, FullName: 'Sobhan Saedi', Skill: 'Developer', Email: 'saedi854@gmail.com'}
]

class Table extends Component {
    state = {
        users: users,
        inputValue: inputValue
    }
    handleDeleteUser = (id) => {
        this.setState({users: this.state.users.filter((user) => user.Id !== id)})
    }
    handleUpdateUser = (oldUser) => {
        const Id = prompt('Pls write Id', oldUser.Id)
        const FullName = prompt('Pls write FullNam', oldUser.FullName)
        const Skill = prompt('Pls write Skill', oldUser.Skill)
        const Email = prompt('Pls write Email', oldUser.Email)
        this.setState({
            users: this.state.users.map((user) => user.Id === oldUser.Id ? {
                Id,
                FullName,
                Skill,
                Email
            } : user)
        })
    }
    handleAddUser = () => {
        const Id = inputValue[0].value
        const FullName = inputValue[1].value
        const Skill = inputValue[2].value
        const Email = inputValue[3].value
        this.setState({users: [...this.state.users, {Id, FullName, Skill, Email}]})
    }
    handleResetInput = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = ""))
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