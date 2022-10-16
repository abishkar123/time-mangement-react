import React from 'react'

export const BadList = () => {
  return (
    <div className="col">
    <h2 className="text-center">Bad List</h2>
    <hr />

    <table className="table table-striped">
      <tbody id="bad-list"></tbody>
    </table>
    <div className="">
      You could hae saved =
      <span id="totalBadHrs">0</span> Hrs
    </div>
  </div>
  )
}
