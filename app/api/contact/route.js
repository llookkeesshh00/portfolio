export async function POST(req) {
    try {
        const data = await req.json();
        console.log("Received data:", data);

        return new Response(JSON.stringify({ message: "Message sent successfully!" }), { 
            status: 200, 
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Error processing request" }), { 
            status: 500, 
            headers: { "Content-Type": "application/json" }
        });
    }
}
