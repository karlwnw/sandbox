import socket


def run_server():
    """
    Dummy HTTP server that listens on 127.0.0.1:9000 and always
    returns a 200 "Hello, World!" HTML response.
    https://docs.python.org/3/library/socket.html#example
    """
    # Configure the socket
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        s.bind(("127.0.0.1", 9000))
        s.listen(0)  # number of incoming connections allowed to be queued

        while True:
            conn_sock, addr = s.accept()  # Blocking call
            with conn_sock:
                print("Connected by", addr)
                while True:
                    data = conn_sock.recv(1024)  # max number of bytes
                    if not data:
                        break
                    print(data)

                    content = b"<h1>Hello, World!</h1>"
                    conn_sock.sendall(b"HTTP/1.1 200 OK\\r\\n")
                    conn_sock.sendall(b"Server: demo\\r\\n")
                    conn_sock.sendall(b"Content-Type: text/html\\r\\n")
                    conn_sock.sendall(
                        "Content-Length: {}\\r\\n".format(len(content)).encode()
                    )
                    conn_sock.sendall(b"\\r\\n")
                    conn_sock.sendall(content)
            print("conn_sock closed")


if __name__ == "__main__":
    run_server()
