import { Chrome, Mail } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  type: 'research' | 'gmail';
  comingSoon?: boolean;
}

export function ProductCard({ title, description, type, comingSoon = true }: ProductCardProps) {
  return (
    <div className="bg-gradient-to-br from-black to-blue-950/30 p-8 rounded-2xl border border-blue-900/30 backdrop-blur-sm group hover:border-orange-500/50 transition-all">
      <div className="mb-4">
        {type === 'research' ? (
          <Chrome className="w-12 h-12 text-orange-500" />
        ) : (
          <Mail className="w-12 h-12 text-blue-500" />
        )}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {comingSoon && (
        <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full mb-6">
          Coming Soon
        </span>
      )}

      {/* Features Section - Always Visible */}
      <div className="mt-6 space-y-4 text-gray-300">
        <h4 className="text-lg font-semibold">Features:</h4>
        <ul className="list-disc list-inside space-y-2">
          {type === 'research' ? (
            <>
              <li>Automated note-taking and summarization</li>
              <li>Bookmarking and organization of research links</li>
              <li>Highlighting key points on any website</li>
              <li>Export summaries to various formats</li>
            </>
          ) : (
            <>
              <li>AI-powered email sorting and categorization</li>
              <li>Automatic draft replies based on context</li>
              <li>Priority tagging for important emails</li>
              <li>Smart filtering of spam and promotions</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
