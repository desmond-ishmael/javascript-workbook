'use strict';

$(document).on('ready', function() {
  var playerTurn = 'X';
  $('div[data-cell]').on('click', function() {
    $(this).text(playerTurn);
    checkForWin();
    playerTurn = (playerTurn === 'X' ? 'O' : 'X');
  });

  function checkForWin() {

    if (
      $('div[data-cell=0]').text() === playerTurn &&
      $('div[data-cell=1]').text() === playerTurn && $('div[data-cell=2]').text() === playerTurn
    ) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    } else if (
      $('div[data-cell=3]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn && $('div[data-cell=5]').text() === playerTurn
    ) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    } else if (
      $('div[data-cell=6]').text() === playerTurn &&
      $('div[data-cell=7]').text() === playerTurn && $('div[data-cell=8]').text() === playerTurn
    ) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    } else if (
      $('div[data-cell=0]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn && $('div[data-cell=8]').text() === playerTurn
    ) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    } else if (
      $('div[data-cell=2]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn && $('div[data-cell=6]').text() === playerTurn
    ) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    } else if (
      $('div[data-cell=0]').text() === playerTurn &&
      $('div[data-cell=3]').text() === playerTurn && $('div[data-cell=6]').text() === playerTurn
    ) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    } else if (
      $('div[data-cell=1]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn && $('div[data-cell=7]').text() === playerTurn
    ) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    } else if (
      $('div[data-cell=2]').text() === playerTurn &&
      $('div[data-cell=5]').text() === playerTurn && $('div[data-cell=8]').text() === playerTurn
    ) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!')
    }

  }

  $('#clear').on('click', function() {
    $('div[data-cell]').text('');
    playerTurn = 'X';
  })


});
