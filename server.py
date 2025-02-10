from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        
        # Set correct content type for .js files
        if self.path.endswith('.js'):
            self.send_header('Content-Type', 'application/javascript')
            
        SimpleHTTPRequestHandler.end_headers(self)

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

port = 8000
handler = CORSRequestHandler
server = HTTPServer(('localhost', port), handler)
print(f"Serving at http://localhost:{port}")
server.serve_forever() 