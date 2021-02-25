

  $(document).ready( function( )
  {
    $( "button" ).hover( function( )
    {
        console.log( "mouse enter" );
        $ ( this ).css( "background-color", "white" ); 
  },
  function( )
{
    console.log( "mouse leave" );
  $( this ).css( "background-color", "rgb(207, 166, 231)" );

} );
} );

