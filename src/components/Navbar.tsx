import { Bot} from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-blue-900/30">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot className="w-8 h-8 text-orange-500" />
          <span className="text-xl font-bold">Rebel Session</span>
        </div>
      </div>
    </nav>
  );
}