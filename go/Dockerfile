# First step
FROM golang:alpine as builder

# Need be here in order to avoid: 
# '"std" is not an importable package'
WORKDIR /go/src

# Copy the hello.go file from the host 
# into the docker image
COPY hello.go ./

# Build hello.go file int /app folder
RUN go build -o /app hello.go 

# Second step
FROM scratch

# Copy from the first step 
COPY --from=builder /app /app

# Execute the app folder content
CMD ["/app"]