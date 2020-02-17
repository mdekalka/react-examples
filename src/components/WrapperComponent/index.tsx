import React, { useState } from "react"

import { generateId } from "../../utils"
import { InjectedProps } from "../../typings/types"

const WrapperComponent = ({ users, onUserAdd, onUserRemove }: InjectedProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

  const onUserSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim()) {
      return setError('Name/email cannot be empty')
    }

    onUserAdd({ id: generateId(), name, email })
    setName('')
    setEmail('')
  }

  return (
    <div>
      <form onSubmit={onUserSubmit}>
        <div>
          <input type="text" name="name" value={name} onChange={onChangeName} autoFocus />
        </div>
        <div>
          <input type="text" name="email" value={email} onChange={onChangeEmail} />
        </div>
        <button type="submit">add user</button>
        {error && <div>{error}</div>}
      </form>
      <br/>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>{user.name} --- {user.email}</div>
            <button onClick={() => onUserRemove(user.id)} >remove user</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WrapperComponent
