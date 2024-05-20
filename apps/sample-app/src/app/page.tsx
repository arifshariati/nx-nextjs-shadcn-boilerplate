'use client';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Textarea,
} from '@nx-nextjs-shadcn-boilerplate/ui/components/shadcn';
import {
  SampleTitleContainer,
  Stack,
} from '@nx-nextjs-shadcn-boilerplate/ui/components';

const SamplePage = () => {
  return (
    <section className="flex flex-col gap-y-2">
      <SampleTitleContainer
        title="Shadcn and Next JS integration with Nx monorepo"
        subTitle="This is the minimlist configuraiton for Shadcn to work with Next JS in
        Nx monorepos"
      />
      <div className="flex flex-col my-10 gap-4">
        <Stack>
          <h2 className="text-2xl font-bold">Shadcn with Next JS and Nx</h2>
          <p>
            This is the minimlist configuraiton for Shadcn to work with Next JS
            in Nx monorepos.
          </p>
        </Stack>
        <Stack>
          <Card>
            <CardHeader>
              <CardTitle>Sample Card </CardTitle>
              <CardDescription>
                This card component is being imported from libs/ui in Nx
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <Stack>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" />
              </Stack>
              <Stack>
                <Label>Description</Label>
                <Textarea placeholder="Your description here ..." />
              </Stack>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </Stack>
      </div>
    </section>
  );
};

export default SamplePage;
