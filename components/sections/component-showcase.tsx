'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function ComponentShowcase() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            컴포넌트 쇼케이스
          </h2>
          <p className="text-muted-foreground text-lg">
            포함된 컴포넌트의 실제 사용 예시를 확인하고 복사해서 사용하세요.
          </p>
        </div>

        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="buttons">버튼</TabsTrigger>
            <TabsTrigger value="forms">폼</TabsTrigger>
            <TabsTrigger value="feedback">피드백</TabsTrigger>
            <TabsTrigger value="other">기타</TabsTrigger>
          </TabsList>

          {/* 버튼 섹션 */}
          <TabsContent value="buttons" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>
                  모든 버튼 스타일 변형
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <Button>기본</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm">작음</Button>
                    <Button>중간</Button>
                    <Button size="lg">큼</Button>
                    <Button disabled>비활성화</Button>
                    <Button onClick={() => setIsLoading(!isLoading)}>
                      {isLoading ? '로딩...' : '로딩 토글'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badge & Avatar</CardTitle>
                <CardDescription>
                  상태 표시와 사용자 아바타
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge>기본</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 폼 섹션 */}
          <TabsContent value="forms" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Form Elements</CardTitle>
                <CardDescription>
                  폼 입력 요소
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="select">Select</Label>
                    <Select>
                      <SelectTrigger id="select">
                        <SelectValue placeholder="옵션을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">옵션 1</SelectItem>
                        <SelectItem value="option2">옵션 2</SelectItem>
                        <SelectItem value="option3">옵션 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">약관에 동의합니다</Label>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="switch">스위치 토글</Label>
                    <Switch id="switch" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 피드백 섹션 */}
          <TabsContent value="feedback" className="space-y-6 mt-6">
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>성공!</AlertTitle>
              <AlertDescription>
                작업이 성공적으로 완료되었습니다.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>오류 발생!</AlertTitle>
              <AlertDescription>
                문제가 발생했습니다. 다시 시도해주세요.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Skeleton Loading</CardTitle>
                <CardDescription>
                  로딩 상태 UX
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  <Skeleton className="h-12 w-full" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 기타 섹션 */}
          <TabsContent value="other" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>
                  컨테이너 컴포넌트
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Card는 정보를 묶는 가장 보편적인 컨테이너입니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Separator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>콘텐츠 1</div>
                <Separator />
                <div>콘텐츠 2</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
