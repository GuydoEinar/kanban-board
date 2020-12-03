
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import Task from './Task'

let container = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove()
    container = null;
})

it('renders with or without a name',()=>{
    act(()=>{
        render(<Task />, container)
    
    })

    expect(container.textContent).toBe('No titleNo content')
    
    act(()=>{
        render(<Task title="Title" content="Content" />, container)
    
    })

    expect(container.textContent).toBe('TitleContent')
})
