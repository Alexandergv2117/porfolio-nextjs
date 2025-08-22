import Card from '@/app/components/ui/card';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowUpRight, Bookmark } from 'lucide-react';

export default function Page() {
   const posts = getAllPosts();

   const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('es-ES', {
         year: 'numeric',
         month: 'long',
         day: 'numeric',
      });
   };

   const getReadingTime = (content: string) => {
      const wordsPerMinute = 200;
      const wordCount = content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / wordsPerMinute);
      return `${readingTime} min de lectura`;
   };

   return (
      <div className="w-full mt-28 sm:mt-36">
         {/* Blog Posts Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {posts.map((post, index) => (
               <Card
                  key={post.slug}
                  className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm ${index === 0 ? 'lg:col-span-1' : ''
                     }`}>

                  {/* Cover Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-800">
                     <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                        <Image
                           src={post.coverImage}
                           alt={post.title}
                           fill
                           className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                     </div>

                     {/* Gradient overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                     {/* Metadata */}
                     {/* Title */}
                     <Link href={`/blog/${post.slug}`} className="block group">
                        <h2
                           className={`font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight ${index === 0
                              ? 'text-3xl sm:text-4xl'
                              : 'text-2xl sm:text-3xl line-clamp-2'
                              }`}>
                           {post.title}
                        </h2>
                     </Link>

                     <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                        <div className="flex items-center gap-2">
                           <Calendar className="w-4 h-4" />
                           <time dateTime={post.date}>{formatDate(post.date)}</time>
                        </div>

                        <div className="flex items-center gap-2">
                           <Clock className="w-4 h-4" />
                           <span>{getReadingTime(post.content)}</span>
                        </div>

                        {post.author && (
                           <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>{post.author.name}</span>
                           </div>
                        )}
                     </div>

                     {/* Excerpt */}
                     <p
                        className={`text-slate-300 leading-relaxed mb-6 ${index === 0 ? 'text-lg line-clamp-3' : 'text-base line-clamp-3'
                           }`}>
                        {post.excerpt}
                     </p>

                     {/* Action */}
                     <div className="flex items-center justify-between">
                        <Link
                           href={`/blog/${post.slug}`}
                           className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
                           <span>Leer más</span>
                           <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>

                        {/* Reading indicator */}
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                           <div className="flex gap-1">
                              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                           </div>
                           <span>#{index + 1}</span>
                        </div>
                     </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700"></div>

                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-tr-full transform -translate-x-12 translate-y-12 group-hover:-translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
               </Card>
            ))}
         </div>

         {/* Empty State */}
         {posts.length === 0 && (
            <div className="text-center py-20">
               <div className="w-24 h-24 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                     className="w-10 h-10 text-slate-400"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                     />
                  </svg>
               </div>
               <h3 className="text-2xl font-bold text-white mb-3">
                  Próximamente nuevos artículos
               </h3>
               <p className="text-lg text-slate-300 max-w-md mx-auto">
                  Estoy trabajando en contenido increíble que aparecerá aquí pronto.
               </p>
            </div>
         )}

         {/* Load More Section */}
         {posts.length > 4 && (
            <div className="text-center mt-16">
               <button className="group px-8 py-4 bg-slate-800 border-2 border-slate-600 hover:border-blue-400 hover:bg-slate-700 text-slate-200 hover:text-blue-300 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg">
                  <span className="flex items-center gap-2">
                     Ver más artículos
                     <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
               </button>
            </div>
         )}
      </div>
   );
}
