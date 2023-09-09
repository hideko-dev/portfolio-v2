program HelloWorld
  implicit none
  logical :: context
  character(10) :: message
  context = .false.
  if (context) then
    message = "tigau"
  else
    message = "aaaaaa"
  end if
  print *, "Hello Svelte"
  print *, "Message:", message

end program HelloWorld
