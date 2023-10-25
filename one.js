const encoder = new TextEncoder();
const data = encoder.encode("Hello world\n");
Deno.writeFileSync("hello1.txt", data);  