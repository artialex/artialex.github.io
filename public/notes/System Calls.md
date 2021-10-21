# System Calls
::aliases[Syscalls]

System calls are the *functions of the operating system*, e. g. `read()` in C

```c
count = read(fd, buffer, nbytes)
```

Other examples of syscall:

```c
fork()
exit(...)
open(...)
close(...)
read(...)
write(...)
mkdir(...)
rmdir(...)
link(...)
unlink(...)
```