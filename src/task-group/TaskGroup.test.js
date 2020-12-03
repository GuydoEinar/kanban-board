
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import TaskGroup from './TaskGroup'

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
        render(<TaskGroup />, container)
    
    })

    expect(container.textContent).toBe('No titleNo content')
    
    act(()=>{
        render(<TaskGroup title="Title" content="Content" />, container)
    
    })

    expect(container.textContent).toBe('TitleContent')
})
