import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'

const PostCard = ({ post }) => {
  return (
    <Card className="hover:shadow-lg transition border border-gray-200">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
            Post #{post.id}
          </span>
          <span className="text-xs text-gray-400">User {post.userId}</span>
        </div>
        <CardTitle className="text-sm font-semibold text-gray-800 capitalize leading-snug mt-2">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-xs text-gray-500 leading-relaxed line-clamp-3">
          {post.body}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <span className="text-xs text-gray-400">Leer más →</span>
      </CardFooter>
    </Card>
  )
}

export default PostCard