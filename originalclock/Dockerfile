# Use the GCC image version 4.9 as the base image
FROM gcc:4.9

# Copy the current directory contents into the container at /usr/src/myapp
COPY . /usr/src/myapp

# Set the working directory in the container to /usr/src/myapp
WORKDIR /usr/src/myapp

# Compile C++ source files (Clock.cpp and main.cpp) into an executable named "main"
# -o flag specifies the output file name
RUN g++ -o main Clock.cpp main.cpp

# Define the default command to execute the compiled program when the container starts
CMD ["./main"]

