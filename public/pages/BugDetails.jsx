const { Link, useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { bugService } from '../services/bug.service.js'

export function BugDetails() {
  const [bug, setBug] = useState(null)
  const { bugId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadBug()
  }, [])

  function loadBug() {
    bugService
      .getById(bugId)
      .then(setBug)
      .catch(err => {
        console.log('err:', err)
        navigate('/bug')
      })
  }

  if (!bug) return <div>Loading...</div>

  return (
    bug && (
      <div>
        <h3>Bug Details 🐛</h3>
        <h4>{bug.title}</h4>
        <p>
          Severity: <span>{bug.severity}</span>
        </p>
        <p>
          Description: <span>{bug.description}</span>
        </p>
        <Link to="/bug">Back to List</Link>
      </div>
    )
  )
}
