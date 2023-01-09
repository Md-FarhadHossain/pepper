import React, { useEffect, useState } from 'react'

const UpdateHeading = () => {
    const [heading, setHeading] = useState('')

    useEffect(() => {
      fetch('http://localhost:5000/heading')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setHeading(data?.heading)
      })
    }, [])

    // handle Sumbit
    const handleSubmit = (event) => {
        event.preventDefault()
        const headingValue = event.target.heading.value
        const result = {
            heading: headingValue
        }
        console.log(heading)

        fetch('http://localhost:5000/heading/63bc591f461922059d5804d0', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='w-full container mx-auto px-24 mt-16'>
             <input name='heading' className="input input-bordered w-full" type="text" defaultValue={heading} />
             <div className='text-end mt-4'>
             <button className="btn">Save</button>
             </div>
        </form>
    </div>
  )
}

export default UpdateHeading