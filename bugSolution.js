```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:path*" element={<NotFound />} /> {/* Added :path* for any level of nested routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() { 
  return <div>Home</div>;
}

function About() { 
  return <div>About</div>;
}

function NotFound() { 
  return <div>Not Found</div>;
}
export default App;
```