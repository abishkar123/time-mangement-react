import React from 'react'

export const BadList = () => {
  return (
    <div class="col">
    <h2 class="text-center">Bad List</h2>
    <hr />

    <table class="table table-striped">
      <tbody id="bad-list"></tbody>
    </table>
    <div class="">
      You could hae saved =
      <span id="totalBadHrs">0</span> Hrs
    </div>
  </div>
  )
}
