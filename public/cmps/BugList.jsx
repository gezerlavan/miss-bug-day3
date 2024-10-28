const { Link } = ReactRouterDOM

import { userService } from '../services/user.service.js'
import { BugPreview } from './BugPreview.jsx'

export function BugList({ bugs, onRemoveBug, onEditBug }) {
  const user = userService.getLoggedInUser()

  function isCreator(bug) {
    if (!user) return false
    if (!bug.creator) return true
    return user.isAdmin || bug.creator._id === user._id
  }

  return (
    <section className="bug-list grid cards">
      {bugs.map(bug => (
        <article className="bug-preview card" key={bug._id}>
          <BugPreview bug={bug} />
          {isCreator(bug) && (
            <div className="flex space-between">
              <button className="btn" onClick={() => onEditBug(bug)}>
                Edit
              </button>
              <button className="btn" onClick={() => onRemoveBug(bug._id)}>
                Delete
              </button>
            </div>
          )}
          <Link className="btn" to={`/bug/${bug._id}`}>
            Details
          </Link>
        </article>
      ))}
    </section>
  )
}
