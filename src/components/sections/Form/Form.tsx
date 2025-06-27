import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Form() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-950">
            <Card className="w-full max-w-sm border-2 border-gray-800 bg-black">
                <CardHeader>
                    <CardTitle className="text-white">Entrar na conta</CardTitle>
                    <CardDescription className="text-white">
                        Entre com seu email e senha para fazer o login
                    </CardDescription>
                    <CardAction>
                        <Button variant="link" className="text-white">
                            Sign Up
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-white">
                                    Email
                                </Label>
                                <Input id="email" type="email" placeholder="m@gmail.com" required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password" className="text-white">
                                        Senha
                                    </Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm text-white underline-offset-4 hover:underline">
                                        Esqueceu a senha?
                                    </a>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button variant="herobutton" type="submit" className="w-full">
                        Entrar
                    </Button>
                    <Button variant="outline" className="w-full">
                        Entrar com Google
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
