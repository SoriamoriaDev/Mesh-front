import io from "socket.io-client";

const url = "http://localhost:4020";

export const socket = io(url);