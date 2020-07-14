import React from 'react'

export default function Die(props) {
    const {num, selector, id, isSelected} = props
    return (
        <div 
            className='die' 
            onClick={() =>selector(id)} 
            style={{backgroundColor: isSelected ? 'blue' : 'white'}}
        >
            <div 
            className='top-left pip'
            style={{display: 
                            num === 1 
                                ? 'none'
                                : num === 2
                                    ? 'block'
                                    :num === 3
                                        ? 'block'
                                        : num === 4
                                            ? 'block'
                                            : num === 5
                                                ? 'block'
                                                : 'block'
            }}></div>
            <div className='top-middle pip'
            style={{display: 
                            num === 1 
                                ? 'none'
                                : num === 2
                                    ? 'none'
                                    :num === 3
                                        ? 'none'
                                        : num === 4
                                            ? 'none'
                                            : num === 5
                                                ? 'none'
                                                : 'block'
            }}></div>
            <div className='top-right pip'
            style={{display: 
                            num === 1 
                                ? 'none'
                                : num === 2
                                    ? 'none'
                                    :num === 3
                                        ? 'none'
                                        : num === 4
                                            ? 'block'
                                            : num === 5
                                                ? 'block'
                                                : 'block'
            }}></div>
            <div className='middle pip'
            style={{display: 
                            num === 1 
                                ? 'block'
                                : num === 2
                                    ? 'none'
                                    :num === 3
                                        ? 'block'
                                        : num === 4
                                            ? 'none'
                                            : num === 5
                                                ? 'block'
                                                : 'none'
            }}></div>
            <div className='bottom-left pip'
            style={{display: 
                            num === 1 
                                ? 'none'
                                : num === 2
                                    ? 'none'
                                    :num === 3
                                        ? 'none'
                                        : num === 4
                                            ? 'block'
                                            : num === 5
                                                ? 'block'
                                                : 'block'
            }}></div>
            <div className='bottom-middle pip'
            style={{display: 
                            num === 1 
                                ? 'none'
                                : num === 2
                                    ? 'none'
                                    :num === 3
                                        ? 'none'
                                        : num === 4
                                            ? 'none'
                                            : num === 5
                                                ? 'none'
                                                : 'block'
            }}></div>
            <div 
                className='bottom-right pip'
                style={{
                    display: num === 1 
                                ? 'none'
                                : num ===2
                                    ? 'block'
                                    :num ===3
                                        ? 'block'
                                        : num ===4
                                            ? 'block'
                                            : num ===5
                                                ? 'block'
                                                : 'block'
                }}
            />
        </div>
    )
}